import { source } from '../source';
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import DottedHeader from './dotter-header';
import InfoItem from './info-item';

export default function LanguageCard() {
    return (
        <Card>
            <CardHeader>
                <DottedHeader title='Languages' />
            </CardHeader>
            <CardContent className="space-y-4">
                {
                    source.languages.map(lang => 
                        <InfoItem value={lang.name} name={lang.level} />
                    )
                }
            </CardContent>
        </Card>
    )
}