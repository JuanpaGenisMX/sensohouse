<?php
if ($_SERVER["REQUEST_METHOD"] == "post") {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $to = 'juanpagenis@gmail.com';

    $subject = 'Nuevo formulario enviado - Senso House';

    $message = "Se ha recibido un nuevo formulario (website forms):\n\n";
    $message .= "Nombre: " . $nombre . "\n";
    $message .= "Apellido: " . $apellido . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Teléfono: " . $phone . "\n";

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo '<p>¡El formulario ha sido enviado correctamente!</p>';
    } else {
        echo '<p>Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.</p>';
    }
}

header("Location:index.html");
?>