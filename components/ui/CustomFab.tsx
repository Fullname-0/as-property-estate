import { FC, useContext, useEffect, useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Fab, Zoom } from "@mui/material";
import useIsInViewport from "../../hooks/useIsInViewport";
import ContactContext from "../../store/contact-context";
import Property from "../../model/web/Property";

type Props = {
  property: Property;
};
const CustomFab: FC<Props> = ({ property }) => {
  const showFab = useIsInViewport("#estate-details-header");
  const isFooterVisible = useIsInViewport("footer");
  const { onOpenCloseModal } = useContext(ContactContext);
  const [fabPositionY, setFabPositionY] = useState("0px");
  const [isFabLocked, setIsFabLocked] = useState(false);
  
  const handleOpenCloseModal = () => {
    onOpenCloseModal(property);
  }

  useEffect(() => {
    const fab = document.getElementById("contact-us-fab");

    if (isFooterVisible && fab) {
      const offsetTop = fab.getBoundingClientRect().top + window.scrollY;
      setFabPositionY(fab ? `${offsetTop}px` : fabPositionY);
      setIsFabLocked(true);
    } else {
      setIsFabLocked(false);
    }
  }, [isFooterVisible]);

  return (
    <Zoom in={showFab}>
      <Fab
        id="contact-us-fab"
        variant="extended"
        color="primary"
        onClick={handleOpenCloseModal}
        sx={{
          position: isFabLocked ? "absolute" : "fixed",
          top: isFabLocked ? fabPositionY : "80%",
          right: "5%",
        }}
      >
        <EmailOutlinedIcon sx={{ mr: 1 }} />
        Napisz do nas
      </Fab>
    </Zoom>
  );
};

export default CustomFab;
