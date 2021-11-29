import React from 'react'

const CreateCourseHint = () => {
    return (
        <>
            <p className="home-text">
                Pamiętaj, aby podczas tworzenia kursu dodać odpowiedni opis.
                Zachęci on potencjalnych użytkowników do dołączenia. Może do być
                również pomocne, jeśli planujesz kurs dla określonych
                użytkowników. Dzięki dokładnemu opisowi będą oni mogli łatwo go
                odnaleźć.
            </p>
            <p className="home-text">
                Jeśli chcesz, aby do kursu mogli by dołączyć tylko Ci
                uczestnicy, którzy znają hasło, zostaw pustą opcję, by kurs był
                publiczny. Dzięki temu dołączenie do kursu, będzie wymagało
                wprowadzenie hasła dostępu, które Ty jako administrator kursu
                będziesz znał.
            </p>
        </>
    )
}

export default CreateCourseHint
