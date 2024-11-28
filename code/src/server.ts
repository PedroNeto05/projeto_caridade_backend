import { app } from '@/app/app';
import { env } from '@/app/lib/env';

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
