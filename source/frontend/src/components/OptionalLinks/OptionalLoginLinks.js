import React from 'react'
import CommonLink from '../Common/CommonLink'

const OptionalLoginLinks = () => {
    return (
        <>
            <div>
                <CommonLink destination="/signup" text="Nie masz konta?" />
            </div>
            <div>
                <CommonLink
                    destination="/reset-password"
                    text="Nie pamiętasz hasła?"
                />
            </div>
        </>
    )
}

export default OptionalLoginLinks
