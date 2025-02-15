
from django.shortcuts import render 
from django.http import HttpResponse
from rest_framework.views import APIView 
from rest_framework import status
from . models import *
from rest_framework.response import Response
from . serializer import ReactSerializer, InterestingReactSerializer

# Create your views here.
class ReactView(APIView):
    serializer_class = ReactSerializer

    def get(self, request):
        detail = [ {"language": detail.language, "description": detail.description}
        for detail in React.objects.all()]
        return Response(detail)
    
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
    
    def delete(self, request):
        React.objects.all().delete()
        return Response({'message': 'All objects in current working model deleted.'},status=status.HTTP_204_NO_CONTENT)
    
class InterestingReactView(APIView):
    serializer_class = InterestingReactSerializer

    def get(self, request):
        detail = [{"programmingLanguage":detail.programmingLanguage, "applications": detail.applications}
                  for detail in InterestingReact.objects.all()]
        return Response(detail)
    
    def post(self, request):
        serializer = InterestingReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
    def delete(self, request):
        InterestingReact.objects.all().delete()
        return Response({'message': 'All objects in current working model deleted.'},status=status.HTTP_204_NO_CONTENT)