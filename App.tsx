
import{Text,View,ScrollView,StyleSheet} from 'react-native';
type Etudiant = {
 id: string;
 nom: string;
 filiere: string;
 note: number;
};

const etudiants : Etudiant [] = [
 { id: 'e1', nom: 'Amine', filiere: 'IAIL S5', note: 14 },
 { id: 'e2', nom: 'Sara', filiere: 'IAIL S5', note: 9 },
 { id: 'e3', nom: 'Lina', filiere: 'IAIL S5', note: 16 },
 { id: 'e4', nom: 'Youssef', filiere: 'IAIL S5', note: 11 },
];

type BadgeProps = {note : number};
function Badgestatus({note} : BadgeProps){
  const admis = note >= 10;
  return(
    <View style ={[styles.badge,admis ? styles.badgeAdmis : styles.badgeAjourne]}>
      <Text style = {styles.textBadge}>{admis ? 'admis' : 'ajourne'}</Text>
    </View>
  );
}

type CarteProps = {etudiant : Etudiant};
function CarteEtudiant({etudiant} : CarteProps){
  const {nom , filiere , note} = etudiant;
  return(
    <View style={styles.carte}>
      <View style={styles.entetecarte}>
        <Text style={styles.nom}>{nom}</Text>
        <Badgestatus note = {note}/>
      </View>
      <Text style={styles.information}>filliere : {filiere}</Text>
      <Text style={styles.information}>note : {note}/20</Text>
    </View>
  );
}
export default function App(){
const nombreAdmis = etudiants.filter((e)=>e.note>=10).length;
const total = etudiants.reduce((somme,e)=>somme + e.note , 0);
const moyenne = (total / etudiants.length).toFixed(1);
return(
  <ScrollView contentContainerStyle={styles.page}>
    <Text style={styles.titre}>CampusCards</Text>
    <Text style={styles.soustitre}>Mes etudiants - IAIL s5</Text>
    <View style={styles.resume}>
      <Text style={styles.textresume}>admis : {nombreAdmis} / {etudiants.length}</Text>
      <Text style={styles.textresume}>moyenne : {moyenne} / 20</Text>

    </View>
    {etudiants.map(etudiant => (<CarteEtudiant key ={etudiant.id} etudiant={etudiant}/>))}
  </ScrollView>
);


}
const styles = StyleSheet.create({
  
  carte : {padding  : 16,backgroundColor : '#ffffff',borderRadius : 12,marginBottom:12,},

  entetecarte: {flexDirection :'row', alignItems: 'center', justifyContent:'space-between',marginBottom : 8},

  nom : {fontSize:18,fontWeight : 'bold',color : '#00235c'},

  information : {color : '#3d4a5c',marginTop:3},

  page : {paddingTop : 56,paddingHorizontal : 18 , paddingBottom : 30,backgroundColor : '#f2f7fd', flexGrow :1,},

  titre : {fontSize:27,fontWeight:'bold',color:'#00235c'},

  soustitre : {color:'#4c5360',marginTop:5,marginBottom:18},

  resume :{padding: 16, borderRadius: 14, backgroundColor: '#DCEBFF',marginBottom: 18, gap: 5},

  textresume : {color: '#00235C', fontWeight: '600', fontSize: 16},

  badge: {padding: 10,borderRadius: 8,},

  badgeAdmis: {backgroundColor: 'green'},

  badgeAjourne: {backgroundColor: 'red'},

  textBadge: {color: 'white',fontWeight: 'bold',},

});

