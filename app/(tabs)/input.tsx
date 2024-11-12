import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InputDataProduk = () => {
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [harga, setHarga] = useState('');

  const handleSubmit = () => {
    console.log({
      nama,
      deskripsi,
      jumlah,
      harga,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Produk Jahit</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Produk"
        placeholderTextColor="#4a148c"  // Menggunakan warna serasi
        value={nama}
        onChangeText={setNama}
      />

      <TextInput
        style={styles.input}
        placeholder="Deskripsi Produk"
        placeholderTextColor="#4a148c"
        value={deskripsi}
        onChangeText={setDeskripsi}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Jumlah"
        placeholderTextColor="#4a148c"
        value={jumlah}
        onChangeText={setJumlah}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Harga"
        placeholderTextColor="#4a148c"
        value={harga}
        onChangeText={setHarga}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Simpan Produk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f3e5f5', // Warna latar belakang yang serasi dengan halaman produk
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4a148c', // Warna teks serasi dengan judul produk di halaman produk
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'serif', // Font elegan seperti di halaman produk
  },
  input: {
    backgroundColor: '#fff',  // Putih bersih agar terlihat jelas
    borderWidth: 1,
    borderColor: '#4a148c', // Border warna ungu yang serasi
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginVertical: 10,
    borderRadius: 8, // Sudut membulat untuk tampilan lembut
    fontSize: 16,
    color: '#333',  // Teks gelap agar mudah dibaca
    fontFamily: 'Arial', // Font yang mudah dibaca
  },
  button: {
    backgroundColor: '#d81b60', // Warna merah muda yang serasi dengan tombol di halaman produk
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 25,
    elevation: 5,  // Bayangan lebih lembut
    shadowColor: '#d81b60',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontFamily: 'serif', // Menyesuaikan dengan tema
  },
});

export default InputDataProduk;
