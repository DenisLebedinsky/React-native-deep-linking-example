import React, { useState, useEffect } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [url, setUrl] = useState('');
  const [startUrl, setStartUrl] = useState(null);

  useEffect(() => {
    Linking.addEventListener('url', (res) => {
      setUrl(res.url);
    });
    return Linking.removeEventListener('url');
  })

  useEffect(() => {
    const getUrlAsync = async () => {
      const initialUrl = await Linking.getInitialURL();
      setStartUrl(initialUrl);
    };
    getUrlAsync();
  });

  return (
    <View style={styles.container}>
      <Text>{`
       The starturl: ${startUrl || "None"}
       the url: ${url || "None"}
      `}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
