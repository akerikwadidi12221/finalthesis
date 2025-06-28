# buildmart/urls.py
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from django.contrib import admin
from .views import index         # import مستقیم، خواناتر
import pprint, sys
print("### buildmart.urls IMPORTED. urlpatterns =", file=sys.stderr)
pprint.pprint([], stream=sys.stderr)  # جا برای بعد

urlpatterns = [
    path("",         index, name="index"),
    path("api/",      include("catalog.urls")),
    path("admin/",    admin.site.urls),
    path("api/catalog/", include("catalog.urls")),  # API
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
print("### urlpatterns AT RUNTIME ↓↓↓", file=sys.stderr)
pprint.pprint(urlpatterns, stream=sys.stderr)
print("############################################", file=sys.stderr)
