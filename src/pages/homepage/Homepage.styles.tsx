import styled from 'styled-components';
import { remify } from '@utils/metrics';

export const Main = styled.main`
  width: 100%;
  overflow: hidden auto;
  height: 100vh;
  padding: ${remify(20)} ${remify(40)};
`;

export const SectionCalendarWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SectionCurrentDayYearDisplay = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${remify(16)};
  padding: ${remify(16)};
  border: solid 1px ${(p) => p.theme.colors.grey.light};

  .day-display,
  .year-display {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    justify-content: flex-start;
    align-items: center;

    .text {
      font-size: ${remify(14)};
      text-transform: capitalize;
      color: ${(p) => p.theme.colors.black};
    }

    .numerical {
      font-size: ${remify(25)};
      font-weight: 500;
      color: ${(p) => p.theme.colors.grey.dark};
    }
  }
`;

export const DivDayWrapper = styled.div`
  width: 100%;
  border: solid 1px ${(p) => p.theme.colors.grey.light};
  height: ${remify(80)};
  border-top-color: transparent;
  position: relative;
  cursor: pointer;

  .time-frame {
    position: absolute;
    font-size: ${remify(12)};
    color: ${(p) => p.theme.colors.grey.dark};
    left: -2rem;
  }

  .top {
    top: -0.5rem;
  }

  .bottom {
    bottom: -0.5rem;
  }
`;

export const DivDaysWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .event-box {
    width: ${remify(100)};
    background-color: ${(p) => p.theme.colors.blue.light};
    border-radius: ${remify(4)};
    position: absolute;
    left: 0;
    top: 0;
    font-size: ${remify(10)};
    box-sizing: border-box;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`;
