from django.contrib import admin
from tienda.Apps.tiendaVenta.models import *

# Register your models here.
admin.site.register(Cliente)
admin.site.register(Producto)
admin.site.register(Venta)
admin.site.register(Comprar)