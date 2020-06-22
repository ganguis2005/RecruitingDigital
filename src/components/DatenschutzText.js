import React, { Component } from 'react';

//Datenschutztext 
export default class Form extends Component {
    
    render() {
    
        return (
           <div style={{margin: 'auto', width: '300px', display: 'grid'}}>
               <h1 style={{textAlign: 'center', fontSize: '20px'}}>Informationen zur Erhebung personenbezogener Daten gemäß Art. 13 DSGVO</h1>
               <p>Nachfolgend informieren wir Sie über die Art und Zweck der Erhebung, über die Rechtsgrundlagen und Ihre Rechte.</p>
               <h2 style={{fontSize:'18px'}}>Die Daten werden zu den folgenden Zwecken verwendet:</h2> 
               <p>Zur Kontaktaufnahme per E-Mail bei geeigneten Position.</p>
               <h2 style={{fontSize:'18px'}}>Welche Daten werden erhoben:</h2>
               <p>Vorname, Nachname, Studiengang, Semester, e.Mail Adresse, Wunschposition (Werkstudent/Praktikant/Festanstellung)</p>
               <h2 style={{fontSize:'18px'}}>Rechtsgrundlagen der Aufnahmen</h2>
               <p>Berechtigte Interessen an der Nutzung der Daten zu den vorgenannten Zwecken gem. Art. 6 Abs. 1 S. 1 lit. f..</p>
               <h2 style={{fontSize:'18px'}}>Aufbewahrungsdauer Daten</h2>
               <p>Die Daten werden solange aufbewahrt, wie das zu den vorgenannten Zwecken erforderlich ist. </p>
               <h2 style={{fontSize:'18px'}}>Hinweise auf die Rechte der Betroffenen </h2>
               <p>
                    Die betroffene Person hat das Recht, von dem Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden; ist dies der Fall, so hat sie ein Recht auf Auskunft über diese personenbezogenen Daten und auf die in Art. 15 DSGVO im einzelnen aufgeführten Informationen. Die betroffene Person hat das Recht, von dem Verantwortlichen unverzüglich die Berichtigung sie betreffender unrichtiger personenbezogener Daten und die Vervollständigung unvollständiger personenbezogener Daten zu verlangen (Art. 16 DSGVO). Die betroffene Person hat das Recht, von dem Verantwortlichen zu verlangen, dass sie betreffende personenbezogene Daten unverzüglich gelöscht werden, sofern einer der in Art. 17 DSGVO im einzelnen aufgeführten Gründe zutrifft, z. B. wenn die Daten für die verfolgten Zwecke nicht mehr benötigt werden (Recht auf Löschung). Die betroffene Person hat das Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen, wenn eine der in Art. 18 DSGVO aufgeführten Voraussetzungen gegeben ist, z. B. wenn die betroffene Person Widerspruch gegen die Verarbeitung eingelegt hat, für die Dauer der Prüfung durch den Verantwortlichen. Die betroffene Person hat das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten Widerspruch einzulegen. Der Verantwortliche verarbeitet die personenbezogenen Daten dann nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Art. 21 DSGVO). Jede betroffene Person hat unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, wenn die betroffene Person der Ansicht ist, dass die Verarbeitung der sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt (Art. 77 DSGVO). Die betroffene Person kann dieses Recht bei einer Aufsichtsbehörde in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes geltend machen.
               </p>
               <button style={{justifySelf: 'center', marginBottom: '20px'}} onClick={this.props.onClick}>close</button>
           </div>

        )
    }
}
