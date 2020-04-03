## React-native Deep linking example

this example of way to start your app from link or catch link when you app is lounched

1. Enable Deep Links (https://reactnative.dev/docs/linking#enabling-deep-links)
2. add code to component

```
import { Linking } from "react-native";
...

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

```

url is the catched url
startUrl is the url that started app
