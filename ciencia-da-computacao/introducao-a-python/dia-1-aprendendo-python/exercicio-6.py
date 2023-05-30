# Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
# Triângulo Equilátero: três lados iguais;
# Triângulo Isósceles: quaisquer dois lados iguais;
# Triângulo Escaleno: três lados diferentes.


def get_triangle_type(side_a, side_b, side_c):
    is_a_triangle = (
        side_a + side_b > side_c
        and side_b + side_c > side_a
        and side_c + side_a > side_b
    )

    if not is_a_triangle:
        return "não é triầngulo"

    if side_a == side_b or side_b == side_c or side_c == side_a:
        return "Triângulo isósceles: quaisquer dois lados iguais"
    elif side_a == side_b == side_c:
        return "Triângulo Equilátero: três lados iguais"
    else:
        return "Triângulo escaleno: três lados diferentes"


print(get_triangle_type(60, 60, 60))
