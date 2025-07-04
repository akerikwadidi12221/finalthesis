from .models import UserActivity

class UserActivityMiddleware:
    """Store visited path for later analysis"""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        if not request.path.startswith('/admin/'):
            user = request.user if hasattr(request, 'user') and request.user.is_authenticated else None
            UserActivity.objects.create(user=user, path=request.path)
        return response
