import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Index() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    if (contador < 15) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gabriel Guerrero Romero</Text>
      <Text style={styles.numero}>{contador}</Text>

      <TouchableOpacity style={styles.boton} onPress={sumar}>
        <Text style={styles.textoBoton}>Sumar +1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={restar}>
        <Text style={styles.textoBoton}>Restar −1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setContador(0)}>
        <Text style={styles.reiniciar}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  numero: {
    fontSize: 72,
    color: '#3B82F6', // Azul claro para que el número resalte en fondo negro
  },
  boton: {
    backgroundColor: '#1E3A8A', // Azul marino
    padding: 14,
    borderRadius: 12,
    marginTop: 14,
    minWidth: 140,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
  },
  reiniciar: {
    marginTop: 20,
    color: '#AAA',
    fontSize: 16,
  },
});