from django.http import JsonResponse
import datetime, sys

def index(request):
    print(">>> index view CALLED at", datetime.datetime.now(), file=sys.stderr)
    return JsonResponse({"message": "BuildMart backend running 🚀"})
