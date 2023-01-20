const FORMULARIO = document.getElementsByTagName('form')

//id del input NOMBRE
const INPTNAME = document.getElementById('validationServer01')

//id del estado del formulario
let fbName = document.getElementById('validationServer01Feedback');

//id del mensaje valido del formulario
let fbNameV = document.getElementById('validationServer01FeedbackTextV');

//id del mensaje invalido del formulario
let fbNameF = document.getElementById('validationServer01FeedbackTextF');

//funcion Nombre
const REGEXTXT = /^[a-zA-ZÀ-ÿ ]+$/;

function funcionNombre () {
    if (!INPTNAME.value || INPTNAME.value.match(REGEXTXT)==null) {
        console.log('es cero')
        fbName.classList.add('invalid-feedback');
        INPTNAME.classList.add('is-invalid')
        fbNameF.classList.remove('hidden');
    }else{
        console.log('no es cero')
        fbName.classList.replace('invalid-feedback', 'valid-feedback');
        INPTNAME.classList.replace('is-invalid', 'is-valid')
        fbNameF.classList.add('hidden');
        fbNameV.classList.remove('hidden');
    }
}

//escuchador Nombre
INPTNAME.addEventListener('change', funcionNombre)
INPTNAME.addEventListener('click', funcionNombre)

//-----------------------------------------------------------------------------------

//id del input APELLIDOS
const INPTSURN = document.getElementById('validationServer02')

//id del estado del formulario
let fbSurn = document.getElementById('validationServer02Feedback');

//id del mensaje valido del formulario
let fbSurnV = document.getElementById('validationServer02FeedbackTextV');

//id del mensaje invalido del formulario
let fbSurnF = document.getElementById('validationServer02FeedbackTextF');

//funcion Apellido
function funcionApellido () {
    if (!INPTSURN.value || INPTSURN.value.match(REGEXTXT)==null) {
        console.log('es cero')
        fbSurn.classList.add('invalid-feedback');
        INPTSURN.classList.add('is-invalid')
        fbSurnF.classList.remove('hidden');
    }else{
        console.log('no es cero')
        fbSurn.classList.replace('invalid-feedback', 'valid-feedback');
        INPTSURN.classList.replace('is-invalid', 'is-valid')
        fbSurnF.classList.add('hidden');
        fbSurnV.classList.remove('hidden');
    }
}

//escuchador Apellido
INPTSURN.addEventListener('change', funcionApellido)
INPTSURN.addEventListener('click', funcionApellido)

//-----------------------------------------------------------------------------------

//id del input USUARIO
const INPTUSER = document.getElementById('validationServerUsername')

//id del estado del formulario
let fbUser = document.getElementById('validationServerUsernameFeedback');

//id del mensaje valido del formulario
let fbUserV = document.getElementById('validationServerUsernameFeedbackTextV');

//id del mensaje invalido del formulario
let fbUserF = document.getElementById('validationServerUsernameFeedbackTextF');

//funcion Usuario
const REGEXUSER = /^[a-z0-9_-]{3,16}$/;

function funcionUsuario () {
    if (!INPTUSER.value || INPTUSER.value.match(REGEXUSER)==null) {
        console.log('es cero')
        fbUser.classList.add('invalid-feedback');
        INPTUSER.classList.add('is-invalid')
        fbUserF.classList.remove('hidden');
    }else{
        console.log('no es cero')
        fbUser.classList.replace('invalid-feedback', 'valid-feedback');
        INPTUSER.classList.replace('is-invalid', 'is-valid')
        fbUserF.classList.add('hidden');
        fbUserV.classList.remove('hidden');
    }
}

//escuchador Usuario
INPTUSER.addEventListener('change', funcionUsuario)
INPTUSER.addEventListener('click', funcionUsuario)

//-----------------------------------------------------------------------------------

//id del input EDAD
const INPTAGE = document.getElementById('validationServer03')

//id del estado del formulario
let fbAge = document.getElementById('validationServer03Feedback');

//id del mensaje valido del formulario
let fbAgeV = document.getElementById('validationServer03FeedbackTextV');

//id del mensaje invalido del formulario
let fbAgeF = document.getElementById('validationServer03FeedbackTextF');

//funcion mayor de edad
function funcionEdad () {
    if (INPTAGE.value == '' || parseInt(INPTAGE.value) <18) {
        console.log('es cero')
        fbAge.classList.add('invalid-feedback');
        INPTAGE.classList.add('is-invalid')
        fbAgeF.classList.remove('hidden');
    }else{
        console.log('no es cero')
        fbAge.classList.replace('invalid-feedback', 'valid-feedback');
        INPTAGE.classList.replace('is-invalid', 'is-valid')
        fbAgeF.classList.add('hidden');
        fbAgeV.classList.remove('hidden');
    }
}

//escuchador Edad
INPTAGE.addEventListener('change', funcionEdad)
INPTAGE.addEventListener('click', funcionEdad)

//-----------------------------------------------------------------------------------

//id del input CORREO ELECTRONICO
const INPTMAIL = document.getElementById('validationServer04')

//id del estado del formulario
let fbMail = document.getElementById('validationServer04Feedback');

//id del mensaje valido del formulario
let fbMailV = document.getElementById('validationServer04FeedbackTextV');

//id del mensaje invalido del formulario
let fbMailF = document.getElementById('validationServer04FeedbackTextF');

//funcion CORREO ELECTRONICO
const REGEXCORREO = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

function funcionCorreo () {
    if (!REGEXCORREO.test(INPTMAIL.value)) {
        console.log('es cero')
        fbMail.classList.add('invalid-feedback');
        INPTMAIL.classList.add('is-invalid')
        fbMailF.classList.remove('hidden');
    }else{
        console.log('no es cero')
        fbMail.classList.replace('invalid-feedback', 'valid-feedback');
        INPTMAIL.classList.replace('is-invalid', 'is-valid')
        fbMailF.classList.add('hidden');
        fbMailV.classList.remove('hidden');
    }
}

//escuchador Correo
INPTMAIL.addEventListener('change', funcionCorreo)
INPTMAIL.addEventListener('click', funcionCorreo)

//-----------------------------------------------------------------------------------

//id del div oculto
const ELF = document.getElementById('elfo');
const DNI = document.getElementById('dni');

//funcion visible
function simsala () {
    if (parseInt(INPTAGE.value) <18) {
        console.log('es menor')
    }else{
        console.log('es mayor')
        ELF.classList.remove('hidden');
        DNI.classList.remove('hidden');
    }
}

INPTAGE.addEventListener('change', simsala)

//------------------------------------------------------------------------------------------------

//id del input ELFO
const INPTELF = document.getElementById('validationServer10');

//id del estado del formulario
let fbElf = document.getElementById('validationServer10Feedback');

//id del mensaje valido del formulario
let fbElfV = document.getElementById('validationServer10FeedbackTextV');

//id del mensaje invalido del formulario
let fbElfF = document.getElementById('validationServer10FeedbackTextF');

//funcion tiene que ser igual a Mellon
function funcionElfo () {
    if (INPTELF.value != 'Mellon') {
        console.log('es cero')
        fbElf.classList.add('invalid-feedback');
        INPTELF.classList.add('is-invalid')
        fbElfF.classList.remove('hidden');
    }else{
        console.log('no es cero')
        fbElf.classList.replace('invalid-feedback', 'valid-feedback');
        INPTELF.classList.replace('is-invalid', 'is-valid')
        fbElfF.classList.add('hidden');
        fbElfV.classList.remove('hidden');
    }
}

//escuchador Elfo
INPTELF.addEventListener('change', funcionElfo)
INPTELF.addEventListener('click', funcionElfo)

//-----------------------------------------------------------------------------------

//id del input DNI
const INPTDNI = document.getElementById('validationServer11')

//id del estado del formulario
let fbDni = document.getElementById('validationServer11Feedback');

//id del mensaje valido del formulario
let fbDniV = document.getElementById('validationServer11FeedbackTextV');

//id del mensaje invalido del formulario
let fbDniF = document.getElementById('validationServer11FeedbackTextF');

//funcion DNI
const REGEXDNI = /(^([0-9]{8,8}\-[A-Z])|^)$/

function funcionDni () {
    if (!REGEXDNI.test(INPTDNI.value)) {
        console.log('es cero')
        fbDni.classList.add('invalid-feedback');
        INPTDNI.classList.add('is-invalid')
        fbDniF.classList.remove('hidden');
    }else{
        console.log('no es cero')
        fbDni.classList.replace('invalid-feedback', 'valid-feedback');
        INPTDNI.classList.replace('is-invalid', 'is-valid')
        fbDniF.classList.add('hidden');
        fbDniV.classList.remove('hidden');
    }
}

//escuchador DNI
INPTDNI.addEventListener('change', funcionDni)
INPTDNI.addEventListener('click', funcionDni)

//-----------------------------------------------------------------------------------

//id del input DIRECCION
const INPTADD = document.getElementById('validationServer05')

//id del estado del formulario
let fbAdd = document.getElementById('validationServer05Feedback');

//id del mensaje valido del formulario
let fbAddV = document.getElementById('validationServer05FeedbackTextV');

//id del mensaje invalido del formulario
let fbAddF = document.getElementById('validationServer05FeedbackTextF');

//funcion Direccion
function funcionDireccion () {
    if (!INPTADD.value) {
        console.log('es cero')
        fbAdd.classList.add('invalid-feedback');
        INPTADD.classList.add('is-invalid')
        fbAddF.classList.remove('hidden');
    }else{
        console.log('no es cero')
        fbAdd.classList.replace('invalid-feedback', 'valid-feedback');
        INPTADD.classList.replace('is-invalid', 'is-valid')
        fbAddF.classList.add('hidden');
        fbAddV.classList.remove('hidden');
    }
}

//escuchador Direccion
INPTADD.addEventListener('change', funcionDireccion)
INPTADD.addEventListener('click', funcionDireccion)

//-----------------------------------------------------------------------------------

//id del input CODIGO POSTAL
const INPTPOST = document.getElementById('validationServer06')

//id del estado del formulario
let fbPost = document.getElementById('validationServer06Feedback');

//id del mensaje valido del formulario
let fbPostV = document.getElementById('validationServer06FeedbackTextV');

//id del 7º mensaje invalido del formulario
let fbPostF = document.getElementById('validationServer06FeedbackTextF');

//funcion Codigo Postal
const REGEXCODIGO = /^\d{5}$/

function funcionCodigo () {
    if (!REGEXCODIGO.test(INPTPOST.value)) {
        console.log('es cero')
        fbPost.classList.add('invalid-feedback');
        INPTPOST.classList.add('is-invalid')
        fbPostF.classList.remove('hidden');
    }else{
        console.log('no es cero')
        fbPost.classList.replace('invalid-feedback', 'valid-feedback');
        INPTPOST.classList.replace('is-invalid', 'is-valid')
        fbPostF.classList.add('hidden');
        fbPostV.classList.remove('hidden');
    }
}

//escuchador Codigo postal
INPTPOST.addEventListener('change', funcionCodigo)
INPTPOST.addEventListener('click', funcionCodigo)

//-----------------------------------------------------------------------------------

//id del input CIUDAD
const INPTCITY = document.getElementById('validationServer07')

//id del estado del formulario
let fbCity = document.getElementById('validationServer07Feedback');

//id del mensaje valido del formulario
let fbCityV = document.getElementById('validationServer07FeedbackTextV');

//id del mensaje invalido del formulario
let fbCityF = document.getElementById('validationServer07FeedbackTextF');

//funcion Ciudad
function funcionCiudad () {
    if (!INPTCITY.value) {
        console.log('es cero')
        fbCity.classList.add('invalid-feedback');
        INPTCITY.classList.add('is-invalid')
        fbCityF.classList.remove('hidden');
    }else{
        console.log('no es cero')
        fbCity.classList.replace('invalid-feedback', 'valid-feedback');
        INPTCITY.classList.replace('is-invalid', 'is-valid')
        fbCityF.classList.add('hidden');
        fbCityV.classList.remove('hidden');
    }
}

//escuchador Ciudad
INPTCITY.addEventListener('change', funcionCiudad)
INPTCITY.addEventListener('click', funcionCiudad)

//-----------------------------------------------------------------------------------

//id del input PROVINCIA (select)
const INPTSELECT = document.getElementById('validationServer08')

//id del estado del formulario
let fbSelect = document.getElementById('validationServer08Feedback');

//id del mensaje valido del formulario
let fbSelectV = document.getElementById('validationServer08FeedbackTextV');

//id del mensaje invalido del formulario
let fbSelectF = document.getElementById('validationServer08FeedbackTextF');

//funcion validar los que no sean 0
function funcionProvincia () {
    if (!parseInt(INPTSELECT.value)) {
        console.log('es cero')
        console.log(INPTSELECT.value)
        fbSelect.classList.add('invalid-feedback');
        INPTSELECT.classList.add('is-invalid')
        fbSelectF.classList.remove('hidden');
    }else{
        console.log('no es cero')
        console.log(INPTSELECT.value)
        fbSelect.classList.replace('invalid-feedback', 'valid-feedback');
        INPTSELECT.classList.replace('is-invalid', 'is-valid')
        fbSelectF.classList.add('hidden');
        fbSelectV.classList.remove('hidden');
    }
}

//escuchador Provincia
INPTSELECT.addEventListener('change', funcionProvincia)
INPTSELECT.addEventListener('click', funcionProvincia)

//-----------------------------------------------------------------------------------

//id del input ACEPTAR
const INPTCHECK = document.getElementById('Check3')

//id del estado del formulario
let fbCheck = document.getElementById('Check3Feedback');

//id del mensaje valido del formulario
let fbCheckV = document.getElementById('Check3FeedbackTextV');

//id del mensaje invalido del formulario
let fbCheckF = document.getElementById('Check3FeedbackTextF');

//funcion Aceptar
function funcionAceptar () {
    console.log('no es cero')
    fbCheck.classList.replace('invalid-feedback', 'valid-feedback');
    INPTCHECK.classList.replace('is-invalid', 'is-valid')
    fbCheckF.classList.add('hidden');
    fbCheckV.classList.remove('hidden');
}

//escuchador Aceptar
INPTCHECK.addEventListener('click', funcionAceptar)
