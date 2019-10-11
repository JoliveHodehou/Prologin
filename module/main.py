import re
fichier = "fichierxml.xml"
expression_reguliere_close_tag = "</[^>]*>"
expression_reguliere_chevron_ouvrant = "<"
expression_reguliere_chevron_fermant = ">"
expression_reguliere_first_ligne = "<?[^>]*\?>"
with open(fichier, 'r') as file:
    Content = file.read()
part1 = re.sub(expression_reguliere_close_tag, "", Content)
part2 = re.sub(expression_reguliere_first_ligne, "", part1)
part3 = re.sub(expression_reguliere_chevron_ouvrant, "", part2)
part4 = re.sub(expression_reguliere_chevron_fermant, " : ", part3)

with open('fichier_lisible.txt', 'w') as newFile:
    newFile.write(part4)
