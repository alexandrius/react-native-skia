#pragma once

#include <memory>
#include <utility>

#include <jsi/jsi.h>

#include "JsiSkHostObjects.h"

#include "JsiSkCanvas.h"
#include "JsiSkImage.h"
#include "SkiaDawnFactory.h"

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdocumentation"

#include "include/core/SkImage.h"
#include "include/core/SkPixmap.h"
#include "include/core/SkSurface.h"
#include "include/gpu/ganesh/GrDirectContext.h"
#include "include/gpu/graphite/Context.h"
#include "include/gpu/graphite/Surface.h"

#pragma clang diagnostic pop

namespace RNSkia {

struct AsyncContext {
  bool fCalled = false;
  std::unique_ptr<const SkImage::AsyncReadResult> fResult;
};

namespace jsi = facebook::jsi;

class JsiSkSurface : public JsiSkWrappingSkPtrHostObject<SkSurface> {
public:
  JsiSkSurface(std::shared_ptr<RNSkPlatformContext> context,
               sk_sp<SkSurface> surface)
      : JsiSkWrappingSkPtrHostObject<SkSurface>(std::move(context),
                                                std::move(surface)) {}

  EXPORT_JSI_API_TYPENAME(JsiSkSurface, Surface)

  // TODO-API: Properties?
  JSI_HOST_FUNCTION(width) { return static_cast<double>(getObject()->width()); }
  JSI_HOST_FUNCTION(height) {
    return static_cast<double>(getObject()->height());
  }

  JSI_HOST_FUNCTION(getCanvas) {
    return jsi::Object::createFromHostObject(
        runtime,
        std::make_shared<JsiSkCanvas>(getContext(), getObject()->getCanvas()));
  }

  JSI_HOST_FUNCTION(flush) {
    auto surface = getObject();
    if (auto dContext = GrAsDirectContext(surface->recordingContext())) {
      dContext->flushAndSubmit();
    }
    if (surface->recorder()) {
		auto sync = skgpu::graphite::SyncToCpu::kNo;
      SkiaDawnFactory::getInstance().fGraphiteContext->submit(sync);
      if (sync == skgpu::graphite::SyncToCpu::kNo) {
        while (SkiaDawnFactory::getInstance().fGraphiteContext->hasUnfinishedGpuWork()) {
            SkiaDawnFactory::getInstance().tick();
            SkiaDawnFactory::getInstance().fGraphiteContext->checkAsyncWorkCompletion();
        }
    }
    }
    return jsi::Value::undefined();
  }

  JSI_HOST_FUNCTION(makeImageSnapshot) {
    sk_sp<SkImage> image = nullptr;
    if (count == 1) {
      auto rect = JsiSkRect::fromValue(runtime, arguments[0]);
      image = getObject()->makeImageSnapshot(SkIRect::MakeXYWH(
          rect->x(), rect->y(), rect->width(), rect->height()));
    } else {
      AsyncContext asyncContext;
      auto surface = getObject();
      auto recorder = surface->recorder();
      if (recorder) {
        auto img = SkSurfaces::AsImageCopy(surface);
        auto info = img->imageInfo();
        auto bounds = img->bounds();


		  SkiaDawnFactory::getInstance().fGraphiteContext->asyncRescaleAndReadPixels(
            img.get(), info, bounds, SkImage::RescaleGamma::kSrc,
            SkImage::RescaleMode::kRepeatedLinear,
            [](void *c,
               std::unique_ptr<const SkImage::AsyncReadResult> result) {
              auto context = static_cast<AsyncContext *>(c);
              context->fResult = std::move(result);
              context->fCalled = true;
            },
            &asyncContext);
		  // TODO: sync cpu yes?
		  SkiaDawnFactory::getInstance().fGraphiteContext->submit();
              if (!asyncContext.fCalled) {
                   // context->submit();
                }
                while (!asyncContext.fCalled) {
					SkiaDawnFactory::getInstance().tick();
					SkiaDawnFactory::getInstance().fGraphiteContext->checkAsyncWorkCompletion();
                }
                if (!asyncContext.fResult) {
					
                }
		   auto rowBytes = asyncContext.fResult->rowBytes(0);
		   auto bytesPerPixel = info.bytesPerPixel();
		  // TODO: MakeWithoutCopy ?
		  auto size = info.computeMinByteSize();
		  auto data = SkData::MakeWithCopy(asyncContext.fResult->data(0), size);
		  auto pixel1B = ((uint8_t *)asyncContext.fResult->data(0))[0];
		  auto pixel1R = ((uint8_t *)asyncContext.fResult->data(0))[1];
		  auto pixel1G = ((uint8_t *)asyncContext.fResult->data(0))[2];
		  auto pixel1A = ((uint8_t *)asyncContext.fResult->data(0))[3];
		  image = SkImages::RasterFromData(info, data, asyncContext.fResult->rowBytes(0));

      } else {
        image = getObject()->makeImageSnapshot();
      }
    }
    if (image == nullptr) {
      return jsi::Value::null();
    }
    return jsi::Object::createFromHostObject(
        runtime, std::make_shared<JsiSkImage>(getContext(), std::move(image)));
  }

  JSI_EXPORT_FUNCTIONS(JSI_EXPORT_FUNC(JsiSkSurface, width),
                       JSI_EXPORT_FUNC(JsiSkSurface, height),
                       JSI_EXPORT_FUNC(JsiSkSurface, getCanvas),
                       JSI_EXPORT_FUNC(JsiSkSurface, makeImageSnapshot),
                       JSI_EXPORT_FUNC(JsiSkSurface, flush),
                       JSI_EXPORT_FUNC(JsiSkSurface, dispose))
};

} // namespace RNSkia
