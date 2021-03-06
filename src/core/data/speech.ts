import { Speech } from '../models/speech/speech.model';
import { SpeechStatusEnum } from '../utils/constants';

export const speechDataFake: Speech[] = [
  {
    id: '1',
    full_name: 'Võ Thị Dung',
    content: 'Kết luận về thí điểm cơ chế, chính sách đặc thù phát triển thành phố Hồ Chí Minh',
    status: SpeechStatusEnum.Finished,
  },
  {
    id: '2',
    full_name: 'Nguyễn Đức Hải ',
    content: 'Báo cáo giải trình, tiếp thu, chỉnh lý dự thảo Nghị quyết về phê chuẩn quyết toán ngân sách nhà nước ',
    status: SpeechStatusEnum.Accepted,
  },
  {
    id: '3',
    full_name: 'Vũ Hồng Thanh',
    content: 'Báo cáo giải trình, tiếp thu, chỉnh lý dự án Luật Đầu tư theo phương thức đối tác công tư (PPP).',
    status: SpeechStatusEnum.Accepted,
  },
  {
    id: '4',
    full_name: 'Phan Xuân Dũng',
    content: 'Thảo luận ở hội trường về dự án Luật Bảo vệ môi trường (sửa đổi).',
    status: SpeechStatusEnum.Accepted,
  },
  {
    id: '5',
    full_name: 'Trần Hồng Hà ',
    content: 'Bộ trưởng Bộ Tài nguyên và Môi trường Trần Hồng Hà giải trình ý kiến của đại biểu Quốc hội.',
    status: SpeechStatusEnum.Accepted,
  },
];
