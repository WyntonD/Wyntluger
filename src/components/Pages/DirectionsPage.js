import React from 'react'

function DirectionsPage() {
    return (
            <div>
            <h2 style={{backgroundColor: '#000', 
                        color:'#fff',
                        textAlign:'center'
                        }}> 
                        <br /> 
                        <br />

                <h1 style={{textAlign:'center', 
                            color:'#fff', 
                            fontFamily:" 'EB Garamond', serif"
                          }}
                >
                      Payments Offered Through CashApp and Zelle</h1> <br />
                      Directions to Lease or Buy:
            </h2> 
              <br />
            <ol style={{backgroundColor: '#000', 
                        color:'#fff',
                        textAlign:'center',
                        fontWeight:'bold'
                       }}
            >
                {/* <li>Find the name of your selected beat(s) on the beat page </li> */}
                <li>Fill out the beat order form </li>
                <li>Wait for a e-mailed order confirmation with a payment request via
                    CashApp or Zelle from <strong >$Wyntluger</strong> or <strong>(919)-699-6444</strong>
                </li>
                <li>Send the total payment for your beat selections via CashApp or Zelle
                </li>
              <h4></h4>
            </ol> 
              <br />
            <h3 style={{  
                      textAlign:'center', 
                      color:'lightblue'
                      }}
            >
              You will receive your beats within 1 business day via e-mail from
              wyntluger@gmail.com with your receipt followed by the terms and conditions of your purchase
            </h3>
          </div>
    )
}

export default DirectionsPage;