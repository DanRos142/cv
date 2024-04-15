import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { source } from '../source';
import { Badge } from '@/components/ui/badge';
import DottedHeader from './dotter-header';

export default function SkillsCard() {
    return (
        <Card>
            <CardHeader>
                <DottedHeader title='Skills' />
            </CardHeader>
            <CardContent className="-m-2 flex flex-wrap">
                {
                    source.skills.map(s =>
                        <Badge key={s} className="badge m-1 cursor-pointer bg-gray-100 text-gray-400">
                            {s}
                        </Badge>)
                }
            </CardContent>
        </Card>
    );
}