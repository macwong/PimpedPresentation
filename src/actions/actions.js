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

export function onMenuClick(dataset) {
    const showTitle = Helpers.ToBoolean(dataset.showtitle);
    let title = dataset.title;

    if (!showTitle) {
        title = "";
    }

    return {
        type: Actions.MENU_CLICK,
        payload: {
            selectedKey: dataset.key,
            isOpen: false,
            selectedSection: dataset.section,
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