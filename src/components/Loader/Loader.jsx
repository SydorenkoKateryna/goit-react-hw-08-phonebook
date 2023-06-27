import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

const StyledLoader = styled.div`
  width: 80px;
  margin: 0 auto;
  margin-top: 20px;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#0c1421"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </StyledLoader>
  );
};

export default Loader;
