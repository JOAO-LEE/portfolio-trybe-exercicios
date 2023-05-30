def get_longer_name(names):
    longer_name = names[0]
    for name in names:
        if len(name) > len(longer_name):
            longer_name = name
    return longer_name


print(
    get_longer_name(
        ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana", "Antonelania"]
    )
)
