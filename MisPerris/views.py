from django.shortcuts import render
def post_list(request):
    return render(request, 'MisPerris/post_list.html', {})
    
def Contactanos(request):
    return render(request, 'MisPerris/Contactanos.html', {})

def Registro(request):
    return render(request, 'MisPerris/Registro.html', {})

def Formulario(request):
    return render(request, 'MisPerris/Formulario.html', {})
