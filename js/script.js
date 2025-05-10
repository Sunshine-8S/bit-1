"use strict";

const voleibolista = function(){
  const nombreV = document.getElementById("nombreVol").value;
  const correoV = document.getElementById("correoVol").value;
  const celularV = document.getElementById("celularVol").value;
  const edadV = document.getElementById("edadVol").value;
  
  if (nombreV == "") {
    document.getElementById("nombreVol").focus();
  } 
  else {
    if (correoV == "") {
      document.getElementById("correoVol").focus();
    } 
    else {
      if (celularV == "") {
        document.getElementById("celularVol").focus();
      } 
      else {
        if (edadV == "") {
          document.getElementById("edadVol").focus();
        } 
        else {
          alert(`Se envió el formulario con: Nombre: ${nombreV} - Correo: ${correoV} - Celular: ${celularV} - Edad: ${edadV}`);
          document.getElementById("nombreVol").value ="";
          document.getElementById("correoVol").value ="";
          document.getElementById("celularVol").value ="";
          document.getElementById("edadVol").value ="";
          document.getElementById("nombreVol").focus();
        }
      }
    }
  }
}

const acudiente = function(){
  const nombreA = document.getElementById("nombreActe").value;
  const correoA = document.getElementById("correoActe").value;
  const celularA = document.getElementById("celularActe").value;

  if (nombreA == "") {
    document.getElementById("nombreActe").focus();
  } 
  else {
    if (correoA == "") {
      document.getElementById("correoActe").focus();
    } 
    else {
      if (celularA == "") {
        document.getElementById("celularActe").focus();
      } 
      else {
        alert(`Se envió el formulario con: Nombre: ${nombreA} - Correo: ${correoA} - Celular: ${celularA}`);
        document.getElementById("nombreActe").value ="";
        document.getElementById("correoActe").value ="";
        document.getElementById("celularActe").value ="";
        document.getElementById("nombreActe").focus()
      }
    }
  }
}
