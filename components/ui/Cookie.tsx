import React, { FC, useState } from "react";
import { Snackbar, Button } from "@mui/material";
import Cookies from 'js-cookie';

const Cookie: FC = () => {
    const [setCookies, handleCookies] = useState(true);

    const setCookie = () => {
      Cookies.set('token', 'true', { expires: 7 })
      handleCookies(false);
    }

    const closeCookie = () => {
      setCookies
    }

    const offCookie = Cookies.get('token');

    const action = (
      <Button color="primary" size="small" onClick={setCookie}>
        Zgadzam się
      </Button>
    );
  
    return (
      <Snackbar sx={{maxWidth: "60%"}} anchorOrigin={{vertical: "bottom", horizontal: "right"}} message="Nasz serwis korzysta z plików Cookies
           w celu realizacji usług zgodnie z polityką prywatności. 
           Można zmienić pozwolenie na zapis danych w plikach Cookies 
           ustawiając odpowiednie opcje w swojej 
           przeglądarce." open={!offCookie}
           onClose={closeCookie} action={action}
          />
    );
  };
  
  export default Cookie;
