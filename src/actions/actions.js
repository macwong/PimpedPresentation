import Actions from "../../js/actionkeys";
import Helpers from "../../js/helpers";

export function onPolaroidClick() {
    return {
        type: Actions.POLAROID_CLICK,
        payload: {
            isOpen: true
        }
    };
}

export function onMenuClick(e) {
    const section = e.currentTarget.dataset.section;
    const showTitle = Helpers.ToBoolean(e.currentTarget.dataset.showtitle);
    let title = e.currentTarget.dataset.title;
    
    if (!showTitle) {
        title = "";
    }

    return {
        type: Actions.MENU_CLICK,
        payload: {
            isOpen: false,
            selectedSection: section,
            selectedTitle: title
        }
    }
}

export function updateMenuIsOpen(isOpen) {
    return {
        type: Actions.MENU_OPEN,
        payload: {
            isOpen: isOpen
        }
    };
}