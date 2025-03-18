import LeetCodeCalendar from 'leetcode-calendar';
import { Row } from "react-bootstrap";
export default function Example() {
 
  const exampleTheme = {
    light: [
      'rgb(235, 235, 235)',
      'rgba(192, 132, 245, 0.44)',
      'rgba(192, 132, 245, 0.6)',
      'rgba(192, 132, 245, 0.76)',
      'rgba(192, 132, 245, 0.92)',
    ],
    dark: [
      'rgb(235, 235, 235)',
      'rgba(192, 132, 245, 0.44)',
      'rgba(192, 132, 245, 0.6)',
      'rgba(192, 132, 245, 0.76)',
      'rgba(192, 132, 245, 0.92)',
    ],
  }

  return (
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
     <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Leet <strong className="purple">Code </strong>
      </h1>
      <LeetCodeCalendar
        username='prashant1000' // Replace with your LeetCode username
        blockSize={17} // Optional: Size of each block in pixels (default: 15)
        blockMargin={7} // Optional: Margin between blocks in pixels (default: 5)
        fontSize={17} // Optional: Font size of the text within blocks (default: 16)
        theme={exampleTheme} // Optional: A custom theme object to style the calendar
      //  style={{ maxWidth: '1000px' }} // Optional: Inline styles for the calendar container
      />
    </Row>
  )
}