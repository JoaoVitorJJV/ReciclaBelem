import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { Layout, FadeIn, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

interface Category {
    id: string;
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    subtitle: string;
    backgroundColor: string;
}

interface FAQ {
    id: string;
    question: string;
    answer: string;
    expanded: boolean;
}

const categories: Category[] = [
    { id: '1', icon: 'lock-closed-outline', title: 'Perguntas sobre', subtitle: 'Pontos de coleta', backgroundColor: '#E5F0FF' },
    { id: '2', icon: 'help-circle-outline', title: 'Perguntas sobre', subtitle: 'Tipos de descarte', backgroundColor: '#E5FFEA' },
    { id: '3', icon: 'card-outline', title: 'Perguntas sobre', subtitle: 'Tipos de pagamento', backgroundColor: '#FFEAEA' },
];

const faqs: FAQ[] = [
    { id: '1', question: 'Como eu crio uma conta?', answer: 'Você pode criar uma conta, baixando o nosso aplicativo ReciclaBelém, e indo na tela de Registrar. Você também pode criar pelo nosso site.', expanded: false },
    { id: '2', question: 'Como adicionar método de pagamento?', answer: 'Vá nas configurações do aplicativo e escolha a opção "Adicionar método de pagamento".', expanded: false },
    { id: '3', question: 'Como fazer um descarte sustentável?', answer: 'Certifique-se de levar seu material até um ponto de coleta adequado.', expanded: false },
    { id: '4', question: 'Por que eu preciso adicionar um método de pagamento?', answer: 'O método de pagamento é necessário para processar pagamentos de taxas de descarte.', expanded: false },
];

export default function FAQ() {
    const [expandedFaqs, setExpandedFaqs] = React.useState<string[]>([]);
    const navigation = useNavigation();

    const toggleFaq = (id: string) => {
        setExpandedFaqs(prev => prev.includes(id) ? prev.filter(faqId => faqId !== id) : [...prev, id]);
    };

    const renderFAQ = ({ item }: { item: FAQ }) => (
        <View style={styles.faqItem}>
            <TouchableOpacity onPress={() => toggleFaq(item.id)} style={styles.faqQuestionContainer}>
                <Text style={styles.faqQuestion}>{item.question}</Text>
                <Ionicons name={expandedFaqs.includes(item.id) ? "remove-outline" : "add-outline"} size={20} color="#000" />
            </TouchableOpacity>
            {expandedFaqs.includes(item.id) && (
                <Animated.View entering={FadeIn} exiting={FadeOut} layout={Layout.springify()}>
                    <Text style={styles.faqAnswer}>{item.answer}</Text>
                </Animated.View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>FAQ</Text>
            </View>

            {/* Subtitle */}
            <Text style={styles.subtitle}>Como podemos te ajudar?</Text>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={20} color="#A1A1A1" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="palavra chave"
                    placeholderTextColor="#A1A1A1"
                />
            </View>

            {/* Categories - Horizontal Scroll */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesContainer}
            >
                {categories.map(category => (
                    <View
                        key={category.id}
                        style={[
                            styles.categoryCard,
                            { backgroundColor: category.backgroundColor }
                        ]}
                    >
                        <Ionicons name={category.icon} size={24} color="#333" />
                        <View>
                            <Text style={styles.categoryTitle}>{category.title}</Text>
                            <Text style={styles.categorySubtitle}>{category.subtitle}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* FAQ List */}
            <View style={styles.faqHeader}>
                <Text style={styles.sectionTitle}>Populares</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAll}>Ver todas</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={faqs}
                renderItem={renderFAQ}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.faqList}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15,
        color: '#333',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F8FA',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 45,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    categoriesContainer: {
        paddingVertical: 10,
    },
    categoryCard: {
        width: 150,
        padding: 15,
        borderRadius: 10,
        marginRight: 10,
        alignItems: 'center',
        height: 110,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    categoryTitle: {
        fontSize: 12,
        color: '#333',
        marginTop: 5,
    },
    categorySubtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    faqHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewAll: {
        color: '#1DA1F2',
        fontSize: 14,
    },
    faqList: {
        paddingBottom: 20,
    },
    faqItem: {
        backgroundColor: '#F5F8FA',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    faqQuestionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    faqQuestion: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    faqAnswer: {
        fontSize: 14,
        color: '#666',
        marginTop: 10,
    },
});
