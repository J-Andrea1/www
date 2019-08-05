from django.db import models

# Create your models here.
class Cliente(models.Model):
    nombres = models.CharField(max_length=35)
    apellidos = models.CharField(max_length=35)
    cedula = models.CharField(max_length=10)


    def nombreCompleto(self):
        cadena = "{0} , {1}"
        return cadena.format(self.nombres, self.apellidos)

    def _str_(self):
        return self.nombreCompleto()


class Producto(models.Model):
    nombre = models.CharField(max_length=35)
    valor = models.PositiveSmallIntegerField()
    fecha = models.DateField()


    def __str__(self):
        return " {0} , ({1}),  {2}".format(self.nombre,  self.valor, self.fecha)


class Venta(models.Model):
    cliente = models.ForeignKey(Cliente, null=False, blank=False, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, null=False, blank=False, on_delete=models.CASCADE)
    fechaVenta = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        cadena = "{0}=>{1}"
        return cadena.format(self.cliente.nombre, self.producto.nombre)

class Comprar(models.Model):
    producto = models.ForeignKey(Producto, null=False, blank=False, on_delete=models.CASCADE)
    cantidad = models.PositiveSmallIntegerField()
    fechaCompra = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        cadena = "{0}, // cantidad: {1}"
        return cadena.format(self.producto.nombre, self.cantidad)

