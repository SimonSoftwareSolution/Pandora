import * as React from "react"
import Grid from '@material-ui/core/Grid';
import {faqStyle, backgroundColor, centeredItems} from '../styles/styles';


const FaqBody = (props) => {
    return(
    <Grid container spacing={3} style={backgroundColor}>

        <Grid item xs={1} style={centeredItems} />
        <Grid item xs={10} onClick={() => props.handleClose()}>
        <p style={faqStyle}>
        ☼ Frequently asked Questions<br/>
        <br/>
        <br/>
        Wer organisiert Pandora? <br/>
        <br/>
        Hey, unser Kernorgateam besteht aus Hanna, Kamran, Hannes, Tabea, Moritz, Pauline, Raul und Rosa. Im Grunde waren wir eine Karlsruher Clique, bevor es uns in die weite Welt verstreute und wir freuen uns sehr, dass wir zur Vorbereitung für ein hoffentlich so schönes Erlebnis wieder zusammen kommen durften. Mit viel Durchhaltevermögen und Spaß, haben wir dem Abenteuer „Pandora“ seit einigen Monaten Leben eingehaucht.
        <br/>
        <br/>
        Wie kommt ihr zu der Location? <br/> <br/>
        Das Grundstück gehört dem Bekannten unserer Eltern, leider schafft er es von seinem Wohnsitz im Süden Deutschlands zu selten so hoch in den Norden zu fahren. Deswegen hatte die Natur sich das Gelände beinahe schon zurückgeholt, bis wir diese Idylle wieder zugänglich machten. Um die dort sehr lebendige Wildnis zu schützen, bitten wir euch daher um ein paar Selbstverständlichkeiten: keinen Müll zu hinterlassen und besonders im Umgang mit Feuer Acht zu geben. 
        <br/>
        <br/>
        Pandora? <br/>
        Aus dem altgriechischen übersetzt und frei interpretiert: „pan“ bedeutet ,all‘ oder ‚gesamt‘ und „doron“ ‚Gabe‘ oder ‚Geschenk‘. Im übertragenen Sinne kann man es also als „alles ist ein Geschenk“ verstehen. Und das Leben ist ein Geschenk – unser eigenes, das unserer Mitmenschen, das der Tiere und das der Pflanzen. Dieses Geschenk gilt es zu würdigen, indem wir uns dessen immer bewusst sind und dementsprechend handeln. 
        Denn „Nur ein Fremdling, sagt man mit Recht, ist der Mensch hier auf Erden.“ Schrieb Goethe hernieder, damit ergibt sich aus dem Namen unsere Verantwortung für und unsere Verbindung zu unserer Umwelt.
        Aber der Name ist in unserer Vorstellung eng an den bildgewaltigen Film „Avatar“ verknüpft und die wild-lebendige Natur des Grundstücks erinnert schlicht an den dort skizzierten Planeten Pandora. Thematisch nehmen wir hierauf Bezug. 
        <br/>
        <br/>
        Was passiert mit meinem Kunstbeitrag? <br/> <br/>
        Klar, der Löwenanteil (wenn es denn reicht?¿ 0.o ) wird benötigt, um das ganze Event überhaupt möglich zu machen. Wir haben Ausgaben für die Anlage, die Bastelei, die Biertischgarnituren, Wasser, Strom und bestimmt noch 100 Sachen mehr. Aber wenn was übrig bleiben sollte, wollen wir von euch, dass ihr entscheidet, ob das Geld gespendet werden soll - an eine Organisation eurer Wahl - oder ob wir den Überschuss bis zum nächsten Jahr verwahren sollen.
        <br/>
        <br/>
        Wie kann ich euch unterstützen? <br/> <br/>
        Gute Vibes und nur Liebe sind auf jeden Fall das Wichtigste. Wir hoffen alle, dass wir das Festival reibungslos über die Bühne bringen und gemeinsam eine wahnsinnig schöne Zeit erleben werden, die uns in Erinnerung bleibt und uns in so manchen Momenten der Zukunft ein warmes Lächeln schenkt. 
        Wenn du auch selbst anpacken möchtest, dann komm zum Aufbau oder bastle uns was Schönes (es gibt eine Bastelgruppe auf WA!)
        <br/>
        <br/>
        Auf einer Skala von 0 bis 10, wie cool wird Pandora? <br/>
        <br/>
        11 laut unserem jetzigen Bauchgefühl
        <br/>
        <br/>
        Schietwedda?  <br/>
        <br/>
        Dann müssen wir wohl einen Regentanz aufführen, wir sind doch nicht aus Zucker! 
        Gibt es Nachbarn? <br/>
        <br/>
        Ja, also bitte schön nett und freundlich sein, wir sind Gäste! Aber da machen wir uns in unserer Konstellation von Leuten keine Sorgen. Die Nachbarn sind informiert und hatten keine Einwände. Im Notfall müssten wir natürlich die Musik etwas drosseln. Das bringt uns zum nächsten Punkt:
        <br/>
        <br/>
        Ordnungsamt, Gesundheitsamt und Polizei ? <br/>
        <br/>
        Wir haben mit den Ämtern gesprochen und ihr Einverständnis für unser Vorhaben. Die Polizei wird informiert sein, muss aber persönlich vorbeikommen, sollte sich jemand beschweren. Da wir aus unserer Sicht grünes Licht haben, gilt es freundlich zu sein, denn Ruhestörung ist eine Ermessensangelegenheit und das verbessert unsere Ausgangslage.
        Ein ganz besonderes Dankeschön geht an Pauline, die sich so liebevoll und fürsorglich um unsere Rosa kümmert und an Heike, Rosa’s Oma, die sich in der Nähe einquartiert, um sich um die kleine zu kümmern!
        Ohne diesen Einsatz, wäre Pandora undenkbar gewesen.
        <br/>
        <br/>
        Noch Fragen offen? Dann nichts wie raus damit :-)  
        <br/>
        <br/>
        </p>
      </Grid>
      <Grid item xs={1} style={centeredItems}/>
    </Grid>
    )}

  export default FaqBody