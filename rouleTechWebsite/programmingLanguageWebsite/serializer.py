from rest_framework import serializers
from . models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['language','description']

class InterestingReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterestingReact
        fields = ['programmingLanguage','applications']
