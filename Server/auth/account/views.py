from django.shortcuts import render
from serializer import RegisterSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import status


# Create your views here.
User = get_user_model()


@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

