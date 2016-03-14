from django.conf.urls import include, url, patterns
from django.contrib import admin
from kds.views import IndexView
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from panel_control.views import PcList
from kds_client.views import HardwareInformation

router = routers.SimpleRouter()
router.register(r'pclist', PcList, 'PcList')
router.register(r'hdInfo', HardwareInformation, 'hdInfo')


urlpatterns = [
	url(r'^admin/', include(admin.site.urls)),
	url(r'^api/v1/', include(router.urls)),
	url(r'^$', 'panel_control.views.homepage', name='index'),
	url(r'^pclist/$', PcList.as_view()),
	url(r'^hdInfo/$', HardwareInformation.as_view()),


]