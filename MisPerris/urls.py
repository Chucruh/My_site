from django.conf.urls import include, url
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^$', views.post_list, name="post"),
    url('^Contactanos/', views.Contactanos,name="con"),
    url('^Registro/', views.Registro,name="reg"),
    url('^Formulario/', views.Formulario,name="for"),
    url('^Iniciar_sesion/', views.Iniciar_sesion,name="ini"),
]



