export default function Loading() {
  return (
    <>
      <div className="loading">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      <style jsx>{`
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        /*loading*/
        .lds-ripple {
          position: relative;
          width: 48px;
          height: 48px;
        }
        .lds-ripple div {
          position: absolute;
          border: 4px solid #10162f;
          opacity: 1;
          border-radius: 50%;
          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .lds-ripple div:nth-child(2) {
          animation-delay: -0.5s;
        }
        @keyframes lds-ripple {
          0% {
            top: 24px;
            left: 24px;
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            top: 0px;
            left: 0px;
            width: 48px;
            height: 48px;
            opacity: 0;
          }
        }
        /*loading end */
      `}</style>
    </>
  );
}
