import * as React from "react";
import styles from "../../app/page.module.css";
import Image from "next/image";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TimelineDot from "@mui/lab/TimelineDot";
const history = [
  {
    date: "2024-10-11",
    content: "다이렉트 계약",
  },
  {
    date: "2024-10-25",
    content: "고양시 웨딩홀 투어",
  },
  {
    date: "2024-10-26",
    content: "서울 웨딩홀 투어",
  },
  {
    date: "2024-10-27",
    content: "웨딩홀 계약",
  },
  {
    date: "2024-10-28",
    content: "아이폰 스냅 계약",
  },
  {
    date: "2024-11-08",
    content: "웨딩 박람회 방문",
  },
  {
    date: "2024-11-12",
    content: "웨딩 반지 계약",
  },
  {
    date: "2024-11-14",
    content: "신혼여행 비행기표 예매",
  },
];
export default function AlternateTimeline() {
  return (
    <Timeline position="alternate">
      {history.map((i) => {
        return (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              {i.date}
              <br></br>
              {i.content}
              <div>
                <Image
                  className={styles.logo}
                  src="/IMG_5205.jpg"
                  alt="asd"
                  width={180}
                  height={38}
                  priority
                />
              </div>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
