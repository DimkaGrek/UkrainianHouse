import { SpinnerCircularFixed } from 'spinners-react';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <SpinnerCircularFixed
        size={60}
        thickness={400}
        speed={100}
        color="#1c4a8a"
        secondaryColor="rgba(247, 230, 43, 0.837)"
      />
    </div>
  );
};

// export const LoaderBox = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   top: 0;
//   left: 0;
//   background-color: rgb(0, 0, 0, 0.5);
// `;
