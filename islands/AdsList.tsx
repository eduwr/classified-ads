import {getAdvertisings} from "../features/advertising/advertising.service.ts";

const useAdvertising = () => {
    return getAdvertisings()
}
export default function AdsList() {
    const ads = useAdvertising()
    return (
        <ul>
            {ads.map(ad => <li>{ad.title}</li>)}
        </ul>
    );
}
