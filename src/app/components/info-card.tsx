import InfoItem from "./info-item";
import { source } from '../source';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DottedHeader from "./dotter-header";


export default function InfoCard() {
    return (
        <Card>
            <CardHeader>
                <DottedHeader title="Information" />
            </CardHeader>
            <CardContent className="space-y-4">
                {source.info.map(info => <InfoItem key={info.value} value={info.value} name={info.name} icon={info.icon} />)}
            </CardContent>
        </Card>
    );
}