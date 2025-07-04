import pytest
from django.test import RequestFactory
from django.contrib.auth.models import AnonymousUser
from buildmart.views import index
from support.models import UserActivity
from support.middleware import UserActivityMiddleware

@pytest.mark.django_db
def test_user_activity_middleware_creates_entry():
    factory = RequestFactory()
    request = factory.get('/')
    request.user = AnonymousUser()
    middleware = UserActivityMiddleware(index)
    middleware(request)
    assert UserActivity.objects.count() == 1
