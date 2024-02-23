const PreviewImageBeforeSend = (props: any) => {
  const { images } = props

  return (
      <>
        {
          images.length > 0 && <div
            style={{
              height: 200,
              padding: "5px 5px",
              overflow: "auto",
              marginBottom: 10
            }}
          >
            {
              images.map((item: any, index: number) => {
                return <div
                  key={index}
                  style={{
                    border: "1px solid #d6dbe1",
                    borderRadius: 3,
                    height: 100,
                    display: "inline-block",
                    backgroundPosition: 'center center',
                    marginRight: 5,
                    marginBottom: 2,
                    width: 100,
                    backgroundImage: `url("${item.blob_url}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}>
                </div>
              })
            }
          </div>
        }</>
  );
}

export default PreviewImageBeforeSend