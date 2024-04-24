import { http } from "./http";

interface UserProgressVo {
  courseId: number;
}

interface UserProgressDto {
  coursePackId: string;
  courseId: string;
  statementIndex: number;
}

export interface UserRecentCoursePackVo {
  id: number;
  coursePackId: string;
  courseId: string;
  title: string;
  description: string;
}

export async function fetchUpdateCourseProgress(dto: UserProgressDto) {
  return await http.put<UserProgressVo, UserProgressVo>(`user-progress`, dto);
}

export async function fetchUserRecentCoursePacks() {
  return await http.get<UserRecentCoursePackVo[], UserRecentCoursePackVo[]>(
    `/user-course-progress/recent-course-packs`,
  );
}