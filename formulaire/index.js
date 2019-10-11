$(function () {
$('#DownloadButton').click(update);
});

var template = [
'<?xml version="1.0" encoding="UTF-8"?>',
'<etudiant>',
  '         <nom><?nameid?></nom>',
  '         <prenom><?prenomid?></prenom>',
  '         <naissance><?naissanceid?></naissance>',
  '         <sexe><?sexeid?></sexe>',
  '         <age><?ageid?></age>',
  '         <pays><?paysid?></pays>',
  '         <ville><?villeid?></ville>',
  '         <universite><?universiteid?></universite>',
  '         <niveau><?niveauid?></niveau>',
'</etudiant>',

].join('\r\n');

function update() {
var variables = {
'prenomid': $('#prenomid').val(),
'nameid': $('#nameid').val(),
'naissanceid': $('#naissanceid').val(),
'sexeid': $('#sexeid').val(),
'ageid': $('#ageid').val(),
'paysid': $('#paysid').val(),
'villeid': $('#villeid').val(),
'universiteid': $('#universiteid').val(),
'niveauid': $('#niveauid').val(),
};

var newXml = template.replace(/<\?(\w+)\?>/g,
function(match, name) {
return variables[name];
});


$('#ResultXml').val(newXml);
$('#DownloadLink')
.attr('href', 'data:text/xml;base64,' + btoa(newXml))
.attr('download', 'fichierxml.xml');
$('#generated').show();
}
