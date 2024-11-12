import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';

const SewingProductMenu = () => {
  const [productList] = useState([
    {
      id: 1,
      name: 'Cotton Fabric',
      description: 'High-quality cotton fabric for all your sewing needs.',
      price: 50000,
      category: 'Fabrics',
    },
    {
      id: 2,
      name: 'Sewing Threads',
      description: 'Durable and colorful threads for all kinds of stitching.',
      price: 15000,
      category: 'Accessories',
    },
    {
      id: 3,
      name: 'Needle Set',
      description: 'A set of assorted needles for different fabrics.',
      price: 25000,
      category: 'Accessories',
    },
    {
      id: 4,
      name: 'Sewing Machine',
      description: 'Heavy-duty sewing machine for professional use.',
      price: 1500000,
      category: 'Machines',
    },
    {
      id: 5,
      name: 'Measuring Tape',
      description: 'Flexible measuring tape for accurate measurements.',
      price: 20000,
      category: 'Tools',
    },
    {
      id: 6,
      name: 'Sewing Scissors',
      description: 'Sharp scissors for precise fabric cutting.',
      price: 35000,
      category: 'Tools',
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Produk Toko Jahit</Text>
      
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryHeader}>Pilih Kategori</Text>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Fabrik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Aksesoris</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Mesin Jahit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Alat Jahit</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={productList}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>Rp {item.price.toLocaleString()}</Text>
            <Text style={styles.productCategory}>{item.category}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.orderButton}>
              <Text style={styles.orderButtonText}>Pesan Sekarang</Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.grid}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5', // Soft purple background
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#4a148c', // Dark purple text
    textAlign: 'center',
    marginBottom: 20,
  },
  categoryContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  categoryHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4a148c',
    marginBottom: 10,
    textAlign: 'center',
  },
  categoryButton: {
    backgroundColor: '#4a148c',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 5,
  },
  categoryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  grid: {
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4a148c', // Dark purple text
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#9c27b0', // Lighter purple for price
    marginBottom: 2,
  },
  productCategory: {
    fontSize: 12,
    color: '#9c27b0', // Matching category color
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 15,
  },
  orderButton: {
    backgroundColor: '#d81b60', // Strong pink button color
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default SewingProductMenu;
