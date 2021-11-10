import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document<{ locale?: string }> {
  render() {
    return (
      <Html lang={this.props.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
