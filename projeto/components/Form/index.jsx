import{View, Text, TextInput, Pressable} from 'react-native'
import styles from './style'
import { useState } from 'react'
import ResultIMC from './ResultImc';


export default function Form(){
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

    function imcCalculator(){
        const heightNum = parseFloat(height);
        const weightNum = parseFloat(weight);
        return (weightNum/(heightNum * heightNum)).toFixed(2);
    }

    function validationImc(){
        if(weight != null && height != null){
            const calculatedImc = imcCalculator()
            setImc(calculatedImc)
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu IMC é igual:')
            setTextButton('Calcular Novamente')
            return
        }
        setImc(null)
        setTextButton('calcular o IMC')
        setMessageImc('Preencha o peso e altura')
    }



    return(
        <View style={styles.form}>
            <Text style={styles.label}>Altura (m)</Text>
            <TextInput style={styles.input} onChangeText={setHeight} value={height}
             placeholder='Ex. 1.75'  keyboardType='numeric' />

            <Text style={styles.label}>Peso (kg)</Text>
            <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder='Ex. 80' keyboardType='numeric'/>

            <Pressable style={styles.buttonCalculator} onPress={() => validationImc()}>
                <Text style={styles.buttonCalculatorText}>{textButton}</Text>
            </Pressable>

            <ResultIMC messageResultImc={messageImc} resultIMC={imc} />
        </View>
    )
}